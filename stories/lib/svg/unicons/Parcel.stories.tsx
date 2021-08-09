import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Parcel, ParcelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Parcel",
  component: Parcel,
} as ComponentMeta<typeof Parcel>;

const Template: ComponentStory<typeof Parcel> = (args: ParcelPropsI) => (
  <x.div display="flex" gap="20px">
    <Parcel {...args} />
    <Parcel {...args} fill="red.500" />
    <Parcel {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
