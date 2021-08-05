import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TruckLoading, TruckLoadingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TruckLoading",
  component: TruckLoading,
} as ComponentMeta<typeof TruckLoading>;

const Template: ComponentStory<typeof TruckLoading> = (
  args: TruckLoadingPropsI
) => (
  <x.div display="flex" gap="20px">
    <TruckLoading {...args} />
    <TruckLoading {...args} fill="red.500" />
    <TruckLoading {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
