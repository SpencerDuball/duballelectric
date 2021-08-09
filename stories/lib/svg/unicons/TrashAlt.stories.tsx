import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TrashAlt, TrashAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TrashAlt",
  component: TrashAlt,
} as ComponentMeta<typeof TrashAlt>;

const Template: ComponentStory<typeof TrashAlt> = (args: TrashAltPropsI) => (
  <x.div display="flex" gap="20px">
    <TrashAlt {...args} />
    <TrashAlt {...args} fill="red.500" />
    <TrashAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
