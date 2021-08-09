import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AnnoyedAlt, AnnoyedAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AnnoyedAlt",
  component: AnnoyedAlt,
} as ComponentMeta<typeof AnnoyedAlt>;

const Template: ComponentStory<typeof AnnoyedAlt> = (
  args: AnnoyedAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <AnnoyedAlt {...args} />
    <AnnoyedAlt {...args} fill="red.500" />
    <AnnoyedAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
