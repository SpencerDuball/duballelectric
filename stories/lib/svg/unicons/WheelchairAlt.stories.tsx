import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WheelchairAlt, WheelchairAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WheelchairAlt",
  component: WheelchairAlt,
} as ComponentMeta<typeof WheelchairAlt>;

const Template: ComponentStory<typeof WheelchairAlt> = (
  args: WheelchairAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <WheelchairAlt {...args} />
    <WheelchairAlt {...args} fill="red.500" />
    <WheelchairAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
